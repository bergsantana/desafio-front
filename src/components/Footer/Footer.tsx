import { Android, Apple } from "@mui/icons-material";
 
export default function Footer() {
    return (
        <footer>
            <div>
                <h4>Departments</h4>
                <div>
                    <p>Shirts</p>
                    <p>Jackets</p>
                    <p>Jewelry</p>
                    <p>Eletronics</p>

                </div>
                <h4>FAQ - Orientations</h4>
            </div>
            
            <div>
                <div>Download our app</div>
                <div>
                    <Android />
                    <Apple />
                </div>
            </div>
        </footer>
    )
}