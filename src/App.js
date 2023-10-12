import {Component} from 'react'
import Gallerytab from './Gallerytab'
import './App.css'
const gallerylist=[
  {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhq8soaW0Os6TI2iI_bODO6erL9Ik70k_FQ&usqp=CAU",
    galleryid:1,
    thumbnailurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhq8soaW0Os6TI2iI_bODO6erL9Ik70k_FQ&usqp=CAU"
  },
  {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUavyUb1qGWvSh_SdxchVx5IhpRlUj5jPc2w&usqp=CAU",
    galleryid:2,
    thumbnailurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUavyUb1qGWvSh_SdxchVx5IhpRlUj5jPc2w&usqp=CAU"
  },
  {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWz_JT9QWdwJ4S3UaZL2W3ni4CgrbbhYhMA&usqp=CAU",
    galleryid:3,
    thumbnailurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWz_JT9QWdwJ4S3UaZL2W3ni4CgrbbhYhMA&usqp=CAU"
  },
  {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNUQJjAw8Wp4_KOG7ybVJwrZ4c6DUfJJabQ&usqp=CAU",
    galleryid:4,
    thumbnailurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNUQJjAw8Wp4_KOG7ybVJwrZ4c6DUfJJabQ&usqp=CAU"
  },
  {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRc8XIq5gQ05cHOqHwwbm9EMlKGtwl0np_A&usqp=CAU",
    galleryid:5,
    thumbnailurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRc8XIq5gQ05cHOqHwwbm9EMlKGtwl0np_A&usqp=CAU"
  },
  {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5I1RuiPNdKWM9zyGRaqq2ZIIqyZlWc460IA&usqp=CAU",
    galleryid:6,
    thumbnailurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5I1RuiPNdKWM9zyGRaqq2ZIIqyZlWc460IA&usqp=CAU"
  },
]
class App extends Component{
    state={
        activeTabId:gallerylist[0].galleryid
    }
    clickTabItem=(tabvalue)=>{
        this.setState({
            activeTabId:tabvalue
        })
    }
    getfilteredimages=()=>{
        const{activeTabId}=this.state
        const filteredimages=gallerylist.filter((gallerydetails)=>(
            gallerydetails.galleryid===activeTabId
        ))
        return filteredimages
    }
    render(){
        const{activeTabId}=this.state
        const filteredimages=this.getfilteredimages()

        return(

            <div className="container">
                {filteredimages.map((gallerydetails)=>(
                    <img src={gallerydetails.imgurl} className="bigimage"/>
                     ))}
                     <h1 style={{color:"blue",marginLeft:"10px"}}>Click on image to view</h1>
                <div className='gallerycontainer'>
                {gallerylist.map((gallerydetails)=>(
                    <Gallerytab gallerydetail={gallerydetails} clickTabItem={this.clickTabItem} isActive={activeTabId===gallerydetails.galleryid}/>
                
            ))}
            </div>
                
            </div>
        )
    }
  
}
export default App 