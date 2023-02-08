// function main() {}

// module.exports = { main }

async function main() {

    var app = document.querySelector("#app")
    const api_PIC= "https://dog.ceo/api/breed/chihuahua/images"
    
    const url= "https://swapi.dev/api/people/?format=json"

    const response = await fetch(url,{
method:"GET",
headers: {
'Content-Type': 'application/json'
 },
 });
 const data = response.json()
 return data.then((_data)=>{
 console.log(_data)
 _data.results.forEach((item, i )=>{
 fetch(api_PIC).then(res=>res.json())
     .then((datas)=>{
     console.log(datas)
     console.log(datas.message[i])
     console.log(item)
     console.log(i)
     app.innerHTML+=`<li id="l${i}"><span>Name: ${item.name}</span>
     <span> <img src="${datas.message[i]}" ></span> </li>`
      })
    })

}

main()

// module.exports = { main }

}