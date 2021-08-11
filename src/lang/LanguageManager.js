import Cookies from 'js-cookie';
import LanguageMetadata from './metadata.json'
import Languages from './languages.json'

export default function LanguageManager(props){
    let language = LanguageMetadata.defaultLanguage
    if(props) {
        if(props.getLanguageName){
            /*Detect if there's a set language */
            if(Cookies.get('lang') !== undefined){
                /*Detect that language is supported*/
                if(Languages[Cookies.get('lang')]){
                    /*If language is supported then return the language name*/
                    language = Languages[Cookies.get('lang')].name
                    return language
                }else{
                    /*If requested language is not supported then */
                    language = Languages[LanguageMetadata.defaultLanguage].name
                    return language
                }
            }else{
                /*If there's no set language */
                language = Languages[LanguageMetadata.defaultLanguage].name
                return language
            }
        }
        if(props.getLanguageKey){
            /*Detect if there's a set language */
            if(Cookies.get('lang') !== undefined){
                /*Detect that language is supported*/
                if(Languages[Cookies.get('lang')]){
                    /*If language is supported then return the language name*/
                    language = Cookies.get('lang')
                    return language
                }else{
                    /*If requested language is not supported then */
                    language = LanguageMetadata.defaultLanguage
                    return language
                }
            }else{
                /*If there's no set language */
                language = LanguageMetadata.defaultLanguage
                return language
            }
        }
        if(props.setLanguage){
            if(Languages[props.setLanguage]){
                language = props.setLanguage
                Cookies.set('lang', props.setLanguage)
            }
        }
    }
    if(Cookies.get('lang') !== undefined){
        /*Detect that language is supported*/
        if(Languages[Cookies.get('lang')]){
            /*If language is supported then return the language*/
            language = Cookies.get('lang')
        }else{
            /*If language is not supported then return the default language
            to avoid errors.*/
            language = LanguageMetadata.defaultLanguage
        }
    }
    return language
}