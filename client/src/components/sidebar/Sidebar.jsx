import {axiosInstance} from '../../config'
import { useEffect, useState } from 'react'
import './sidebar.css' 


export default function Sidebar() {
  const [cats , setCats] = useState([])

  useEffect(()=>{
    const getcats = async ()=>
    {
      const res = await axiosInstance.get("/categorys")
      setCats(res.data)
    }
    getcats()
  },[])


  return (
    <div className='Sidebar'>
          <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cdn.pixabay.com/photo/2016/07/23/03/56/love-1536226_960_720.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=>(
          
            <li className="sidebarListItem">{c.name}</li>
       
          ))}
          
    
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
