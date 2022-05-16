brandcodeFormats = {
  '80263956':'9',
  '80290600':'9',
  '80297423':'9',
  '80297424':'9',
  '80297431':'9',
  '80304165':'9',
  '80304166':'9',
  '80304910':'9',
  '80309995':'6',
  '80314219':'6',
  '80319394':'9',
  '80321495':'6',
  '80322777':'6',
  '80332570':'6',
  '80332571':'6', 
  '80334087':'6',
  '80334092':'6',
  '80334100':'6',
  '80337120':'6',
  '80338184':'9',
  '80338573':'6',
  '80339179':'5',
  '80340878':'8',
  '80341266':'6',
  '80341268':'6',
  '80341734':'6',
  '80341850':'1',
  '80341851':'1',
  '80341864':'1',
  '80341893':'1',
  '80342092':'6',
  '80342853':'6',
  '80342854':'6',
  '80343374':'8',
  '80344767':'6',
  '80344817':'6',
  '80344818':'6',
  '80345324':'6',
  '80346403':'6',
  '80346860':'9',
  '80346868':'9',
  '80346884':'9',
  '80346886':'9',
  '80347121':'1',
  '80347122':'1',
  '80347182':'5',
  '80347186':'5',
  '80347193':'5',
  '80349966':'6',
  '80350992':'8',
  '80351030':'6',
  '80351469':'5',
  '80351470':'5',
  '80351471':'5',
  '80351472':'5',
  '80351490':'5',
  '80352640':'9',
  '80353995':'1',
  '80353997':'1',
  '80353998':'1',
  '80353999':'1',
  '80354001':'1',
  '80354002':'1',
  '80354005':'1',
  '80354006':'1',
  '80354007':'1',
  '80354008':'1',
  '80355509':'8',
  '80355557':'6',
  '80357561':'1',
  '80357567':'6',
  '80357570':'1',
  '80357571':'6',
  '80357572':'1',
  '80357573':'1',
  '80357574':'8',
  '80357576':'6',
  '80357577':'1',
  '80357579':'1',
  '80357582':'6',
  '80357583':'6',
  '80357584':'6',
  '80357595':'8',
  '80357610':'9',
  '80357624':'9',
  '80357626':'5',
  '80357630':'5',
  '80357664':'1',
  '80357666':'1',
  '80357691':'1',
  '80357692':'6',
  '80357693':'5',
  '80357704':'9',
  '80357706':'9',
  '80357707':'9',
  '80357709':'9',
  '80357717':'8',
  '80357719':'8',
  '80357722':'8',
  '80357724':'8',
  '80357726':'8',
  '80357889':'6',
  '80357904':'8',
  '80359363':'6',
  '80359366':'1',
  '80359527':'6',
  '80360469':'5',
  '80360471':'9',
  '80361515':'8',
  '80362296':'6',
  '80362463':'6',
  '80362464':'6',
  '80363097':'1',
  '80363103':'1',
  '80363104':'1',
  '80363105':'1',
  '80363106':'1',
  '80363717':'6',
  '80363720':'8',
  '80365151':'1',
  '80365463':'6',
  '80365464':'6',
  '80365567':'8',
  '80365573':'8',
  '80365579':'8',
  '80365581':'1',
  '80365582':'1',
  '80365583':'8',
  '80365586':'8',
  '80366080':'9',
  '80366084':'9',
  '80366132':'9',
  '80366138':'9',
  '80366139':'9',
  '80366141':'9',
  '80366205':'6',
  '80366206':'6',
  '80366212':'6',
  '80366214':'6',
  '80366219':'6',
  '80366220':'6',
  '80366222':'6',
  '80366513':'8',
  '80367221':'1',
  '80367927':'1',
  '80369066':'5',
  '80681643':'6',
  '80681644':'6',
  '80681645':'6',
  '80681646':'6',
  '80702662':'1',
  '80703418':'1',
  '80703419':'1',
  '80703420':'1',
  '80703421':'1',
  '80703429':'8',
  '80703430':'8',
  '80703433':'8',
  '80703487':'1',
  '80703488':'1',
  '80703493':'6',
  '80703494':'6',
  '80706849':'6',
  '80706856':'1',
  '80706860':'1',
  '80706862':'1',
  '80706877':'1',
  '82318243':'8',
  '69420' : 'me'
  }
  
  photos = {
    '15': "./images/15.png",
    '16' : "./images/16.png" ,
    '18' : "./images/18.png",
    '19' : "./images/19.png",
    '51' : "./images/51.png",
    '56' : "./images/56.png",
    '58' : "./images/58.png",
    '59' : "./images/59.png",
    '61' : "./images/61.png",
    '65' : "./images/65.png",
    '68' : "./images/68.png",
    '69' : "./images/69.png",
    '81' : "./images/81.png",
    '85' : "./images/20.png",
    '86' : "./images/86.png",
    '89' : "./images/89.png",
    '91' : "./images/91.png",
    '95' : "./images/95.png",
    '96' : "./images/96.png",
    '98' : "./images/98.png",
    'meme' : "./images/me.jpg"
  }
  
  const buttonBefore = document.querySelector('.buttonBefore')
  const buttonAfter = document.querySelector('.buttonAfter')
  const submitBtn = document.querySelector('.submitBtn')
  const body = document.querySelector('body')
  // labelsFrom.textContent = `Changing Over From Format: ${}`
  // labelTo.textContent = `Changing Over To Format: ${}`
  const labelsFrom = document.querySelector('.labelsFrom')
  const labelsTo = document.querySelector('.labelsTo')
  submitBtn.addEventListener("click", send)
  
  function send(e) {
    e.preventDefault()
    // console.log(buttonBefore.value)
    // console.log(buttonAfter.value)
    const myImage = document.createElement("img")
    const desiredKey = brandcodeFormats[buttonBefore.value] + brandcodeFormats[buttonAfter.value]
    beforeButton = buttonBefore.value
    afterButton = buttonAfter.value
    formatBefore = brandcodeFormats[beforeButton]
    formatAfter = brandcodeFormats[afterButton]
    // console.log(brandcodeFormats[beforeButton])

    labelsFrom.textContent= `Changing Over From Format: ${formatBefore}`
    labelsTo.textContent= `Changing Over From Format: ${formatAfter}`
    if (Object.keys(photos).includes(desiredKey)) {
      myImage.src = photos[desiredKey]
      body.appendChild(myImage)
    }
  
  }



// HARRISON

// brandcodeFormats = {
//     '12345' : "1", 
//     '23456' : "2"
// }

// photos = {
//     '12': "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="    
// }

// const buttonBefore = document.querySelector('.buttonBefore') 
// const buttonAfter = document.querySelector('.buttonAfter')

// function getValueInput(){
//     let inputValue1 = document.querySelector("#domTextElement1").value; 
//     console.log(`inputValue1  ${inputValue1}`)
//     let inputValue2 = document.querySelector(".domTextElement2").value; 
//     const myImage = document.createElement("img")
//     const desiredKey = brandcodeFormats[inputValue1.value] + brandcodeFormats[inputValue2.value]
//     console.log(desiredKey)
//     if (Object.keys(photos).includes(desiredKey)) {
//         myImage.src = photos[desiredKey]
//         body.appendChild(myImage)
//       }
//     document.querySelector("#valueInput").innerHTML = `First input value: ${inputValue1} Second Input Value: ${inputValue2}`; 
//   }

// function addingTheNumbers(){
//     inputValue1 = inputValue1.toString()
//     inputValue2 = inputValue2.toString()
//     console.log(inputValue1)
// }


