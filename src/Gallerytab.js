import './gallerytab.css'
const Gallerytab=(props)=>{
    const{clickTabItem,gallerydetail,isActive}=props
     const{imgurl,galleryid}=gallerydetail
     const onClickTabItem=()=>{
        clickTabItem(galleryid)
     }
     const tabclass=isActive?'activate':''
    return(
        <div className="gallerycontainer">
        <img src={imgurl} onClick={onClickTabItem} alt="smallimage" className={`smallimage ${tabclass}`} />
        </div>

    )
}
export default Gallerytab