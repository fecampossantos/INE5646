from django.db import models

class Sheet(models.Model):
    # Char details
    CharacterName = models.CharField(max_length=30)
    ClassLevel = models.CharField(max_length=30)
    Background = models.CharField(max_length=30)
    PlayerName = models.CharField(max_length=30)
    Race = models.CharField(max_length=30)
    Alignment = models.CharField(max_length=30)
    
    # Char Attributes
    STR = models.IntegerField()
    STRmod = models.IntegerField()
    DEX = models.IntegerField() 
    DEXmod = models.IntegerField()
    CON = models.IntegerField()
    CONmod = models.IntegerField()
    INT = models.IntegerField()
    INTmod = models.IntegerField()
    WIS = models.IntegerField()
    WISmod = models.IntegerField()
    CHA = models.IntegerField()
    CHAmod = models.IntegerField()

    #  i dont know man section 1
    ProfBonus = models.IntegerField() #Proficiency bonus
    AC = models.IntegerField() # Armor Class
    Iniative = models.IntegerField()
    Speed = models.IntegerField()
    HPMax = models.IntegerField()

    #  i dont know man section 2
    PersonalityTraits = models.CharField(max_length=30)
    Ideals = models.CharField(max_length=30)
    Bonds = models.CharField(max_length=30)
    Flaws = models.CharField(max_length=30)

    # Saving throws
    Check_Box_11 = models.BooleanField(default=False) # STR checkbox
    ST_Strength = models.IntegerField()

    Check_Box_18 = models.BooleanField(default=False) # DEX checkbox
    ST_Dexterity = models.IntegerField()

    Check_Box_19 = models.BooleanField(default=False) # CON checkbox
    ST_Constitution = models.IntegerField()

    Check_Box_20 = models.BooleanField(default=False) # INT checkbox
    ST_Intelligence = models.IntegerField()

    Check_Box_21 = models.BooleanField(default=False) # WIS checkbox
    ST_Wisdom = models.IntegerField()

    Check_Box_22 = models.BooleanField(default=False) # CHA checkbox
    ST_Charisma = models.IntegerField()

    #Skills
    Check_Box_23 = models.BooleanField(default=False)
    Acrobatics = models.IntegerField()

    Check_Box_24 = models.BooleanField(default=False)
    Animal = models.IntegerField()
    
    Check_Box_25 = models.BooleanField(default=False)
    Arcana = models.IntegerField()

    Check_Box_26 = models.BooleanField(default=False)
    Athletics = models.IntegerField()

    Check_Box_27 = models.BooleanField(default=False)
    Deception = models.IntegerField()

    Check_Box_28 = models.BooleanField(default=False)
    History = models.IntegerField()

    Check_Box_29 = models.BooleanField(default=False)
    Insight = models.IntegerField()

    Check_Box_30 = models.BooleanField(default=False)
    Intimidation = models.IntegerField()

    Check_Box_31 = models.BooleanField(default=False)
    Investigation = models.IntegerField()

    Check_Box_32 = models.BooleanField(default=False)
    Medicine = models.IntegerField()

    Check_Box_33 = models.BooleanField(default=False)
    Nature = models.IntegerField()

    Check_Box_34 = models.BooleanField(default=False)
    Perception = models.IntegerField()

    Check_Box_35 = models.BooleanField(default=False)
    Performance = models.IntegerField()

    Check_Box_36 = models.BooleanField(default=False)
    Persuasion = models.IntegerField()

    Check_Box_37 = models.BooleanField(default=False)
    Religion = models.IntegerField()

    Check_Box_38 = models.BooleanField(default=False)
    SleightofHand = models.IntegerField()

    Check_Box_39 = models.BooleanField(default=False)
    Stealth = models.IntegerField()

    Check_Box_40 = models.BooleanField(default=False)
    Survival = models.IntegerField()