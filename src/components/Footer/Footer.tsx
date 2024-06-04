import { Android, Apple, Facebook, Instagram, Twitter } from "@mui/icons-material";
 
export default function Footer() {
    return (
        <footer 
            className="
            lg:h-full lg:p-16
            h-full
            flex pt-4 pb-5 px-4 gap-6
            text-white font-mono  font-bold   
            bg-blue-700 border-t-2 border-white p2"
        >
            <div>
                <h4>Follow us</h4>
                <div>
                    <Instagram />
                    <Facebook />
                    <Twitter/>
                </div>
            </div>
            
            <div>
                <div>Download our app</div>
                <div>
                    <Android />
                    <Apple />
                </div>
            </div>
            <div className="hidden lg:">

            </div>
        </footer>
    )
}