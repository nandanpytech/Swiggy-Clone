export const getlocationdata=async(region)=>{
    const datas=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=f218ec140d407cea83ce5e87fc33b711`)
    const data=await datas.json()
    return data
}