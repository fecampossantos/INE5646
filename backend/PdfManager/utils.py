from PyPDF2 import PdfFileReader
import pdfrw

ANNOT_KEY = '/Annots'
ANNOT_FIELD_KEY = '/T'
ANNOT_RECT_KEY = '/Rect'
SUBTYPE_KEY = '/Subtype'
WIDGET_SUBTYPE_KEY = '/Widget'


class PdfManager:

    def readPdf(file):
        pdfFileReader = PdfFileReader(file)
        # dict de campos do pdf
        pdf_fields = pdfFileReader.getFields()
        # infos do personagem
        char_info = {}
        for field_name in pdf_fields:
            field_info = pdf_fields[field_name]
            if '/V' in field_info:
                if '/FT' in field_info and field_info['/FT'] == '/Btn':
                    # é um checkbutton
                    char_info.update({field_name: True if field_info['/V'] == '/Yes' else False})
                else:
                    # é um campo de texto padrao
                    char_info.update({field_name: field_info['/V']})
        file.close()
        return char_info

    def writePdf(data_dict):
        template_pdf = pdfrw.PdfReader('default_sheet.pdf')
        for page in template_pdf.pages:
            annotations = page[ANNOT_KEY]
            for annotation in annotations:
                if annotation[SUBTYPE_KEY] == WIDGET_SUBTYPE_KEY:
                    if annotation[ANNOT_FIELD_KEY]:
                        key = annotation[ANNOT_FIELD_KEY][1:-1]
                        if key in data_dict.keys():
                            if type(data_dict[key]) == bool:
                                if data_dict[key] == True:
                                    annotation.update(pdfrw.PdfDict(
                                        AS=pdfrw.PdfName('Yes')))
                            else:
                                annotation.update(
                                    pdfrw.PdfDict(V='{}'.format(data_dict[key]))
                                )
                                annotation.update(pdfrw.PdfDict(AP=''))
        template_pdf.Root.AcroForm.update(pdfrw.PdfDict(NeedAppearances=pdfrw.PdfObject('true')))
        pdfrw.PdfWriter().write('output.pdf', template_pdf)

# if __name__ == '__main__':
#     file = open('example_filled_sheet.pdf', 'rb')
#     char_info = PdfManager.readPdf(file)
#     PdfManager.writePdf(char_info)
