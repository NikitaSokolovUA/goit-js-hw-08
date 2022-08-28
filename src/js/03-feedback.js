
import throttle from "../../node_modules/lodash/throttle"

const feedbackForm = document.querySelector('.feedback-form')
const LOCAL_STORAGE_KEY = "feedback-form-state"
const settings =  {
        email: '',
        message: ''
    }


feedbackForm.addEventListener('submit', handleSubmit)
feedbackForm.addEventListener('input', throttle(savedInputElementInLOcalStorage, 500))

gettingInputElementFromLocal()



function handleSubmit(e) {   
    const settingsOfUser = getObjectOfForms()
    console.log(settingsOfUser)    

    localStorage.removeItem(LOCAL_STORAGE_KEY)

    feedbackForm.email.value = ''
    feedbackForm.message.value = ''

    e.preventDefault()
}

function savedInputElementInLOcalStorage(e) {   
    const SET_EMAIL = "email";

    e.target.name === SET_EMAIL
        ? settings.email = e.target.value
        : settings.message = e.target.value
   
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(settings))

}

function gettingInputElementFromLocal() {
    const parsetSettingFromLocalStorage = getObjectOfForms()

    if (parsetSettingFromLocalStorage) {
        feedbackForm.email.value = parsetSettingFromLocalStorage.email 
        feedbackForm.message.value = parsetSettingFromLocalStorage.message 
}
    

}

function  getObjectOfForms() {
    const savedSettingsFromStorage = localStorage.getItem(LOCAL_STORAGE_KEY)
    return JSON.parse(savedSettingsFromStorage)
}

