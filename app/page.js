'use client'
import Image from "next/image";
import icon from "@/assets/icon.png";

import home_icon from "@/assets/icons/home.png"
import plant_icon from "@/assets/icons/plant.png"

import water_icon from "@/assets/icons/water.png"
import chart_icon from "@/assets/icons/chart.png"
import person_icon from "@/assets/icons/person.png"
import report_icon from "@/assets/icons/report.png"


import help_icon from "@/assets/icons/help.png"


import bell_icon from "@/assets/icons/bell.png";
import settings_icon from "@/assets/icons/settings.png"
import refresh_icon from "@/assets/icons/refresh.png"

import search_icon from "@/assets/icons/search.png"


import wind_icon from "@/assets/icons/wind.png"
import report_white_icon from "@/assets/icons/report white.png"
import water_white_icon from "@/assets/icons/water white.png"
import temperatura_icon from "@/assets/icons/temperatura.png"


import platancao_image from "@/assets/platancao.png";
import { useState } from "react";

const nav_items = [
  {
    icon: home_icon,
    title: 'Dashboard'
  },
  {
    icon: plant_icon,
    title: 'Plantio/Irrigação'
  }, {
    icon: chart_icon,
    title: 'Gráficos'
  },
  {
    icon: person_icon,
    title: 'Perfil'
  }, {
    icon: report_icon,
    title: 'Relatório'
  }
]

const diarios = [
  {
    icon: report_white_icon,
    title: 'Relatório',
  },
  {
    icon: temperatura_icon,
    title: 'Temperatura'
  },
  {
    icon: water_white_icon,
    title: 'Humidade do Solo'
  },
  {
    icon: wind_icon,
    title: 'Vento'
  }

]

async function connectBluetooth(){
 
    const bt = await navigator.bluetooth.requestDevice({
    
      acceptAllDevices:true});

    
  
      const btServer = await bt.gatt.connect();
  
      //if(btServer.connected){
      // const btService = await btServer.getPrimaryService(0xffe5);
  
 //      const btCharacteristic = await btService.getCharacteristic(0xffe9);

   //    console.log('Valor: ' + (await btCharacteristic.readValue()))
    //  }
  
    
 // }
  //catch(ex){
 //   console.log(ex);
    //alert('Não foi possivel conectar-se ao bluetooth');
 // }
 
  
  
}
export default function Home() {

  const [connected, setConnected] = useState(false);
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      {/* Barra lateral */}
      <aside className=" bg-[rgb(88,131,56)] mx-4 my-6 px-4 py-6 rounded-lg  w-[250px] text-white flex flex-col">
        <Image src={icon} width={100} className=" mx-auto mb-4" />
        <div className=" mb-2 h-0.5 bg-zinc-50 opacity-30"></div>

        <ul className="mt-4 flex flex-col gap-2">
          {nav_items.map((item, index) => <NavItem icon={item.icon} title={item.title} active={index == 0} key={index} />)}
        </ul>

        <div className="mt-auto h-[100px] overflow-hidden rounded-lg relative">
          <Image src={platancao_image} className="  absolute top-0  left-0 z-0 brightness-50" />
          <div className=" absolute left-0 top-0 h-full w-full px-2 py-3 text-sm">
            <div className="flex gap-2 items-center mb-2">
              <div className="py-2 px-2 rounded-full bg-white w-fit ">
                <Image src={help_icon} width={18} />
              </div>



              <p className="font-bold">Posso ajudar?</p>

            </div>
            <button className="bg-[#477728] text-white px-2 py-1 rounded-lg block w-fit mx-auto">Descreva</button>
          </div>

        </div>
      </aside>
      {/* Conteudo principal */}
      <main className="flex-1 px-8 py-6 overflow-auto">
        <div className=" mb-8 flex">
          <h1 className="text-[rgb(73,80,0)] font-bold  text-xl">Dashboard</h1>
          <div className="ml-auto flex gap-4 items-center">
            <div className=" rounded-lg overflow-hidden  flex items-center ">
              <div className="bg-[#8d8d8d] px-1 py-1">
                <Image className="h-fit  brightness-0 invert" src={search_icon} width={20} />

              </div>
              <input type="text" className=" px-3 py-1 bg-[#f6f6f6] outline-none border-none placeholder-zinc-200" placeholder="Pesquise algo..." />
            </div>
            <Image className="h-fit cursor-pointer hover:scale-125 duration-150" src={settings_icon} width={24} />
            <Image className="h-fit cursor-pointer hover:scale-125 duration-150" src={bell_icon} width={24} />
            <Image className="h-fit cursor-pointer hover:scale-125 duration-150" onClick={connectBluetooth} src={refresh_icon} width={24} />

          </div>
        </div>

        <div className="flex gap-8">
          {diarios.map((diario) => <ButtonDiario title={diario.title} icon={diario.icon} />)}
        </div>

        <div className="flex gap-6 mt-8">
          <div className="flex flex-col gap-6 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.1035586526!2d15.74140425!3d-12.769972849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb775b4dbf6dfdb%3A0x43a78822d1399cdb!2sHuambo!5e0!3m2!1spt-PT!2sao!4v1717531508249!5m2!1spt-PT!2sao" width="450" height="250" style={{
                border: 'none'
              }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className=" w-full rounded-lg text-white px-6 py-4 " style={{
              background: 'linear-gradient(to top, #588338, #82ba4d)'
            }}>

<h1 className="font-bold text-lg mb-4">Temperatura</h1>

            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className=" w-full bg-zinc-200 rounded-lg text-white  px-6 py-4" style={{
              background: 'linear-gradient(to top, #588338, #82ba4d)'
            }}>
              <h1 className="font-bold text-lg mb-4">Vento</h1>

              <div className="bg-[#82ba4d] px-4 py-2 rounded-lg flex mb-4  items-center">
                Velocidade do vento
                <div className=" mx-4 h-[20px] bg-white w-0.5"></div>
                <strong>20 m/s</strong>
              </div>

              <div className="bg-[#82ba4d] px-4 py-2 rounded-lg flex  items-center">
              Direção do vento
                <div className=" mx-4 h-[20px] bg-white w-0.5"></div>
           <strong>Norte</strong>
              </div>
            </div>
            <div className=" w-full bg-zinc-200 rounded-lg text-white  px-6 py-4" style={{
              background: 'linear-gradient(to top, #588338, #82ba4d)'
            }}>
              <h1 className="font-bold text-lg mb-2">Humidade do Solo</h1>
              <p className="mb-4">Humidade (Y) / Tempo (X)</p>
              {/* Humidade */}

              <div className="flex items-center gap-2 font-bold">
              <div className="py-2 px-2 rounded-md flex-none  bg-[#90e053]">
              <Image src={water_white_icon} width={18}/>
           

      </div>
      Boa
              </div>
            </div>  

          </div>

        </div>
      </main>
    </div>
  );
}


function NavItem({ icon, title, active }) {
  return (
    <li className={" py-2 px-4 rounded-lg flex  gap-3 items-center  cursor-pointer" + (active ? " bg-[rgb(130,186,77)] " : " hover:bg-[#f9fff446]")}>
      <div className={"py-2 px-2 rounded-full flex-none " + (active ? " bg-[rgb(98,149,58)]" : "bg-white ")}>
        <Image src={icon} width={18} className={active ? " brightness-0 invert" : ""} />

      </div>
      {title}
    </li>
  );
}



function ButtonDiario({ title, icon }) {
  return (
    <button className="text-start  text-sm min-w-[200px] hover:shadow-md flex gap-4 rounded-lg items-center bg-[#ecffd6]  text-[#494f0a] px-4 py-2">
      <div>    <p >{title} </p>
        <p className=" opacity-50">diário</p></div>
      <div className="bg-[#62953a] px-1 py-1 flex-none ml-auto rounded-lg">
        <Image src={icon} width={20} />

      </div>
    </button>
  );
}