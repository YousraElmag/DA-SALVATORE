
const poster=document.querySelector('.poster')
const menulist=document.querySelector('.menu ul')
const nav = document.querySelector('.nav');
const allnavlinks=document.querySelectorAll('.nav a')
const noallnav=document.querySelectorAll('.nav>:not(.menu)')
noallnav.forEach(function(e){
  e.addEventListener('click',()=>{
list.style.display='none'
poster.style.display='none'

  })
})

allnavlinks.forEach(function(e){
    e.addEventListener('mouseover',()=>{
        allnavlinks.forEach(function(allnavlinks){
            allnavlinks.classList.remove('active')
          
            
        })
        e.classList.add('active')
  
    })
  
  
 
})
// random offer
const offerimg=document.querySelector('.offer img');
console.log(offerimg);

const alloffer=['https://i.postimg.cc/J4Wz4fgp/Prosciutto_e_Funghi_pizza_-9751.png'
,"https://i.postimg.cc/WbjsPMFK/a4b83174f74f6e7ef01bdb5492cc8a96.jpg","https://i.postimg.cc/4dDNcq3N/Alpenkaas-9747.png","https://i.postimg.cc/xdq04nJ1/b6c0108a525f23220f621bd590eac594.jpg","https://i.postimg.cc/cCG0C3Dv/377813b1296ec1c695492282bfafefb3.jpg" 
]
function getRandomPhoto() {
    // Generate a random index to select a photo from the array
    const randomIndex = Math.floor(Math.random() * alloffer.length);
    const randomPhotoUrl = alloffer[randomIndex];
offerimg.src = randomPhotoUrl;
}
getRandomPhoto()
 setInterval(getRandomPhoto,2000)
//  active menu 
const pizzamenu=[
  {
      name:'Greek Pizza',
      imag:"https://i.postimg.cc/SxkRVBfn/NL_PHSY_all_menu_10667.avif",
      ingredaint:"Tomato sauce, Garlic, Olive oil"
    },
    {
      name:'California Pizza',
      imag:"https://i.postimg.cc/Z5HRQwwV/NL_PMLS_all_menu_10667.avif",
      ingredaint:"Tomato sauce, Mozzarella, Broccoli, Garlic, Chili peppers, Oregano"
      
    },
    {
      name:'Sicilian Pizza',
      imag:"https://i.postimg.cc/yNrN1k4R/NL_PCAP_all_menu_10667.avif",
      ingredaint:"Tomato sauce, Mozzarella, Salmon, Garlic"
       
    },
    {
      name:'Margherita Pizza',
      imag:"https://i.postimg.cc/HxckVddh/NL_PSAL_all_menu_10667.avif",
    ingredaint:"Tomato sauce, Mozzarella, Garlic, Small clams, Chili powder"
    },
    {
      name:'Chicago Deep-Dish Pizza',
      imag:"https://i.postimg.cc/yNrN1k4R/NL_PCAP_all_menu_10667.avif",
      ingredaint:"Tomato sauce, Mozzarella, Grilled vegetables"
    },
    {
      name:'New York Style Pizza',
      imag:"https://i.postimg.cc/4ycyFZ09/NL_PVEG_all_menu_10667.avif",
      ingredaint:"Tomato Sauce, Mozzarella, Anchovies, Garlic, Hot chili peppers"
       
    },
  {
    name:'Neapolitan',
    imag:"https://i.postimg.cc/yNrN1k4R/NL_PCAP_all_menu_10667.avif",
    ingredaint:"Ricotta, Mozzarella, Garlic"
   
  },
  {
      name:'Cheese Pizza',
      imag:"https://i.postimg.cc/Gh0HT8BJ/NL_PCNB_all_menu_10667.avif",
      ingredaint:"Bolognese sauce, Mozzarella"
       
    },  {
      name:'Veggie Pizza',
      imag:"https://i.postimg.cc/hP9hLDTF/NL_PCSU_all_menu_10667.avif",
    ingredaint:"Tomato sauce, Mozarella, Cherry tomatoes"
    },  {
      name:'Pepperoni Pizza',
      imag:"https://i.postimg.cc/BnmSpXvz/NL_PDES.HALF_all_menu_9291.avif",
      ingredaint:"Folded pizza, ingredients vary"
    
    },{
      name:'Meat Pizza',
      imag:"https://i.postimg.cc/bJWdTdmP/NL_PEXT_all_menu_10667.avif",
      ingredaint:"Mussels, Garlic, Olive oil, Parsley"
  },{
      name:'Margherita Pizza',
      imag:"https://i.postimg.cc/L6B6qyF2/NL_PFUN_all_menu_10667.avif",
      ingredaint:"Tomato sauce, Mozzarella, Shrimps (Gamberetti)"
  }
]
const pastamenu=[
  {
    name:'Bow Tie Pasta',
    imag:"https://i.postimg.cc/qqSCQ1kT/59a1529842d9e7837ae909e4c3aa7436.jpg",
    ingredaint:"Bolognese sauce, Mozzarella"
  },
  {
      name:'Bucatini Pasta',
      imag:"https://i.postimg.cc/Hs8Mj12s/fd598b549f7e6765aa01fbd763c0fbb1.jpg",
      ingredaint:"Bolognese sauce, Mozzarella"
      
    },  {
      name:'Ditalini Pasta',
      imag:"https://i.postimg.cc/qMKwt5X0/4e36bd6ad9ef45c8f87044b6dd585f8b.jpg",
      ingredaint:"Bolognese sauce, Mozzarella"
      
    },  {
      name:'Egg Noodles',
      imag:"https://i.postimg.cc/sXtnqd96/2594928b6f79c9f83ef68edce7b4fd93.jpg",
      ingredaint:"Bolognese sauce, Mozzarella"
      
    },{
      name:'Fettuccine Pasta',
      imag:"https://i.postimg.cc/zvZjpw84/0e15e4f9594396d30b415fa6b81d4cfc.jpg",
      ingredaint:"Bolognese sauce, Mozzarella"
     
  },{
      name:'Fusilli Pasta',
      imag:"https://i.postimg.cc/qqsGFt7q/d40f31b047c26cdaa4d15ccf87e9f9e1.jpg",
      ingredaint:"Bolognese sauce, Mozzarella"
      
  }
  ,{
    name:'Gemelli Pasta',
    imag:"https://i.postimg.cc/FHB0DbxG/25727a9f368455323979354c8a625332.jpg",
    ingredaint:"Bolognese sauce, Mozzarella"
   
},{
  name:'Gnocchi',
  imag:"https://i.postimg.cc/sDKYZCQk/0b40e2edfb8f8e64855cef454840892e.jpg",
  ingredaint:"Bolognese sauce, Mozzarella"
  
}
,{
name:'Lasagna',
imag:"https://i.postimg.cc/T1Jr9ZkW/0c723101cee329dec6fe9cc4678e4a9b.jpg",
ingredaint:"Bolognese sauce, Mozzarella"

}
]
const saladmenu=[
  {
    name:'Caesar salad',
    imag:"https://i.postimg.cc/CxP972tt/d1e2a9c45ae8746c20b326c49414f663.jpg",
    ingredaint:"tomato, cucumber, onion, carrot"
   
  },
  {
      name:'Cucumber salad',
      imag:"https://i.postimg.cc/bNR7DrRq/615c73bc585b4b08f1666528e3606b85.jpg",
      ingredaint:"omaine lettuce and croutons dressed with parmesan cheese"
      
    },  {
      name:'Classic potato salad',
      imag:"https://i.postimg.cc/wB3YdzLg/f110c8d50df4cce12fcdfb5a5c31b634.jpg",
     ingredaint:"A lightly fermented cabbage relish."
    },  {
      name:'Caprese salad',
      imag:"https://i.postimg.cc/9QmjJZf4/f216f08940e8370d07f2295285a952df.jpg",
     ingredaint:"Made from rice, crushed pineapple, egg, sugar, vinegar"
    },{
      name:'Greek salad',
      imag:"https://i.postimg.cc/pXYHfqPb/d62c3c1d65f053e3977ca29b3dc06282.jpg",
      ingredaint:"Made with cooked elbow macaroni pasta served cold"
     
  },{
      name:'Chicken salad',
      imag:"https://i.postimg.cc/vHdyxpFt/3aa92d89c6bbc1545a44d59c83e4cf8e.jpg",
      ingredaint:"Chopped greens or vegetables"
      
  }
]


const list=document.querySelector('.list')

const menue=document.querySelector('.menu')
menue.addEventListener('mouseover',function(){
menulist.style.visibility='visible'
})
menue.addEventListener('mouseout',function(){
    menulist.style.visibility='hidden'
  
    })
   
 
    
function displayMenu(menu) {
    let menuHTML = menu.map((item) => {
        return `
    
            <div class="item">
                <h2>${item.name}</h2>
                <img src="${item.imag}" alt="">
                <h3>(${item.ingredaint})</h3>
                <h1>20$ <button>+ADD</button></h1>
            </div>`;
    }).join('');
    

    list.innerHTML =menuHTML
    list.style.background = "#deb8878a"
    list.style.marginTop = "20px"
poster.style.display='block'
   list.style.display='grid'
}

const pizza=document.querySelector('.pizza')
const pasta=document.querySelector('.pasta')
const salad=document.querySelector('.salad')


// Display pizza menu when hovering over pizza element
pizza.addEventListener('click', () => displayMenu(pizzamenu));
pasta.addEventListener('click', () => displayMenu(pastamenu));
salad.addEventListener('click', () => displayMenu(saladmenu));


