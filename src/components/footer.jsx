import styleFooter from "./Footer.module.css"

const Footer = () =>{
    return(
        <footer className={styleFooter.footer}>
            <p><strong>©DISTRIBUIDORA EL ROLO</strong></p>
                <img className={styleFooter.instagram} src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/Instagram_logo.svg.png?alt=media&token=beca55ad-87f8-45f5-9083-f6a524a321d0" alt="link instagram" />
                <img className={styleFooter.nequi} src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/nequi.png?alt=media&token=fcef2085-62af-42b3-a41e-926a7e7996f2" alt="nequi" />
                <img className={styleFooter.davi} src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/daviplata.png?alt=media&token=a1d4f085-a6b1-485f-bd90-cd7628cf90f4" alt="daviplata" />
        </footer>
    )
}

export default Footer;