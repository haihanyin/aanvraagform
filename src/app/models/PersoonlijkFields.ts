import { InputFieldConfig } from './InputFieldConfig';
import { DateFieldConfig } from './DateFieldConfig';
import { SelectFieldConfig } from './SelectFieldConfig';
import { CheckFieldConfig } from './CheckFieldConfig';
import { RadioFieldConfig } from './RadioFieldConfig';
import { BasicFieldConfig } from './BasicFieldConfig';

export class PersoonlijkFields {
    static fields: Array<BasicFieldConfig> = [
        new InputFieldConfig("bsn", "BSN", true)
            .withHelpText("Uw burgerservicenummer (BSN) kunt u vinden op uw paspoort, rijbewijs of ander identiteitsbewijs. Het bestaat altijd uit 9 cijfers."),
        new DateFieldConfig("geboortedatum", "Geboortedatum", true),
        new InputFieldConfig("geboortenaam", "Achternaam (Geboortenaam)", true)
            .withInfoText("De achternaam die u bij uw geboorte hebt gekregen."),
        new InputFieldConfig("voorletters", "Voorletters", false),
        new InputFieldConfig("voorvoegsel", "Voorvoegsel", false),
        new SelectFieldConfig("geslachtCode", "Geslacht", true, ["---", "Man", "Vrouw"], 0),
        new SelectFieldConfig("burgerlijkeStaatCode", "Burgerlijke staat", true, [
            "---",
            "Achtergebleven geregistreerd partner",
            "Gehuwd",
            "Geregistreerd partner",
            "Gescheiden",
            "Gescheiden geregistreerd partner",
            "Gescheiden of gescheiden geregistreerd partner",
            "Onbekend",
            "Ongehuwd en geen geregistreerd partner en nooit gehuwd of geregistreerd partner geweest",
            "Weduwe/weduwnaar"], 0),
        new SelectFieldConfig("leefsituatieCode", "Leefsituatie", true, [
            "---",
            "Een ander meerpersoonshuishouden",
            "Heeft een huishouden met partner en thuiswonende kinderen",
            "Heeft een huishouden van volwassene met 1 of meer kinderen",
            "Heeft een zelfstandig huishouden met uitsluitend partner",
            "Onbekend",
            "Woont alleen en zelfstandig (eenpersoonshuishouden)",
            "Woont als kind samen met ouder(s) in ouderlijk huis",
            "Woont in een zorginstelling met verblijf"
        ], 0),
        new SelectFieldConfig("juridischeMaatregelenCode", "Juridische maatregelen", false, [
            "---",
            "Bewindvoering",
            "In bewaring stelling (ibs)",
            "Mentorschap",
            "Onder curatele stelling",
            "Onder toezichtstelling (ots)",
            "RM met voorwaardelijk ontslag",
            "RM op eigen verzoek",
            "Rechterlijke machtiging (rm) voorlopig / voortgezette machtiging",
            "Strafrechterlijke justitiële contacten: overig",
            "Strafrechterlijke justitiële contacten: tbs",
            "Voogdij",
            "Zaakwaarneming"
        ], 0)
            .withHelpText("Dit veld dient u te vullen indien er sprake is van juridische maatregelen. Bijvoorbeeld mentorschap of onder curatele stelling"),
        new InputFieldConfig("telefoonnummer", "Telefoonnummer", false)
            .withInfoText("Als er geen telefoonnummer is van de zorgvrager, vul dan op de volgende pagina, bij het onderdeel relaties, een contactpersoon in."),

        new CheckFieldConfig("isTelefoonnummerGeheim", "Het Telefoonnummer is Geheim", false, false),
        new SelectFieldConfig("taalCode", "Taal", true, ["NEDERLANDS", "CHINEES"], 0),
        new RadioFieldConfig("isInStaatTotTelefonischeCommunicatie", "Bent u in staat tot telefonische communicatie?", true, ["Ja", "Nee"], 0)
            .withInfoText("Indien u niet in staat bent tot telefonische communicatie, is het vullen van een contactpersoon verplicht."),
        new SelectFieldConfig("bijzondereCommunicatievormCode", "Bijzondere communicatievorm", false, ["---", "Doofblindentolk", "Doventolk", "Tolk taal"], 0)

    ]

    

}