export const textPlump = (text: string, len = 30) => {
    if(text.length > len){
        return `${text.slice(0, len)}...`
    }else {
        return text
    }
}