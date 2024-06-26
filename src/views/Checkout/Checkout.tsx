import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage"
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material"
import { Close } from "@mui/icons-material";
import { defaultCartState } from "../../App";
import { useNavigate } from "react-router-dom";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'blue',
    border: '1px solid white',
    color: 'white',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

export default function Checkout() {

    const { cart  , setProducts   } = useContext(CartContext)

    const [ cartTotal, setCartTotal ] = useState(0)

    const  [ transactionStatus, setTransactionStatus ]  = useState(false)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const navigate = useNavigate()

    const calcCartTotal = () => {
        const i = 0
        const result = cart.reduce(( (acc, curr) => acc + (curr.product.price * curr.qty ) ), i)
        setCartTotal(result ?? 0)
    }  

    const cleanCart = () => {
        console.log('transaction state',transactionStatus) 
        if(transactionStatus){
            setProducts([defaultCartState])
            console.log('cart state', cart)
            calcCartTotal()
            setTimeout(() => navigate('/'), 5000)
        }

    }

    const handleSubtmit= (e  : React.SyntheticEvent ) =>{
         
        e.preventDefault()
         

        const formObj = e.target as typeof e.target & { 
            nameInput: {value: string},
            cardInput: {value: string},
            threeDigitInput: {value: string},
            expDateMonInput: {value: string},
            expDateYearInput : { value: string}, 
            idInput: {value: string},
            birthdateInput: {value: Date}
        }
        handleOpen()
        setTransactionStatus(Boolean( Math.floor(Math.random() * 2)))

 
        console.log(formObj.birthdateInput.value )  
   
    }


    useEffect(() => {calcCartTotal(), cleanCart()},[transactionStatus])

    return (
        <AnimatedPage>
            <div className=" bg-white self-start h-full flex flex-col lg:w-8/12 lg:m-auto lg:rounded">
                <div className="flex flex-col">
                    <div className="text-lg mt-2 ml-3 font-serif">Total of products  </div>
                    <div className="
                        mt-4 mb-3
                        text-5xl font-bold text-center text-green-700  ">${cartTotal.toFixed(2)}</div>
                    <div className="text-md mt-2 ml-3 font-serifs">Payment by Credit Card:</div>
                </div>
                <div>
                    <div className="text-small px-2 my-4">Please, fill your credit card information:</div>
                    <form 
                        onSubmit={handleSubtmit}
                        className="flex flex-col gap-2 px-2 border-2 lg:border-4 lg:rounded lg:w-96 lg:m-auto">
                        <div className="flex flex-col">
                            <input
                                name="nameInput "
                                className="pl-1 border-2 border-gray-400 rounded m-0 mt-2 w-full"   placeholder="Name on the card" type="text" value={'John Smith Stewart'}/>
                            <div className="flex">
                                <input 
                                    name="cardInput"    
                                    className=" pl-1 border-2 border-gray-400 rounded m-0 mt-2 w-72 mr-1" 
                                    placeholder="Credit card number" 
                                    type="text"
                                    value={'5555 4444 1111 2222'}
                                    />
                                <input
                                    name="threeDigitInput" 
                                    className="border-2  border-gray-400 rounded m-0 pl-2 mt-2 mr-1 w-20" 
                                    placeholder="CVV" 
                                    type="text" 
                                    value={'999'}/>
                                    
                            </div>
                        </div>
                        <div>
                            <div className="flex mb-1">
                                <div className="text-gray-400 mr-4">Expiration date</div>
                                <div className="flex border-2 border-gray-400 rounded">
                                    <input 
                                        name="expDateMonInput"
                                        className="    m-0 mr-1 w-6 pl-1" placeholder="month" type="text" value={'01'} />
                                    <div className="mx-0" >/</div>
                                    <input 
                                        name="expDateYearInput"
                                        className="  border-gray-400 rounded m-0 mr-1 w-14 pl-1" placeholder="year" type="text" value={'2031'} />

                                </div>
                            </div>
                            <input  
                                name="idInput"
                                className="border-2 border-gray-400 rounded m-0 pl-2 " placeholder="ID Document" type="text" value={'2229966-5'} />
                            <div className="flex my-1">
                                <div className="text-gray-400 mr-4"> Birthdate</div>
                                 
                                <div className="flex border-2 rounded border-gray-400   ">
                                    <input placeholder="dd" className="w-8 pl-1" value={'01'} />
                                    <div>/</div>
                                    <input placeholder="mm"  className="w-8 pl-1" value={'12'} />
                                    <div>/</div>
                                    <input  placeholder="yyyy"  className="w-11 pl-1" value={'1999'} />
                                </div>

                            </div>
                        </div>
                        <button 
                            className=" animate-pulse border-2 border-gray-400 rounded m-0 mb-4  mx-auto bg-blue-700 text-white h-12 w-52 hover:bg-blue-400"
                            type="submit"
                        >
                            Confirm
                        </button>

                    </form>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                    }}
                >
                    <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                        <Close 
                            className="cursor-pointer"
                            onClick={() => handleClose()}
                         />
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {
                                transactionStatus ? 
                                    <div>
                                        Success! Thank you for shopping with Fake Online Store. Your payment has been verified. You'll be redirected in 5 seconds.
                                    </div>
                                    :
                                    <div>
                                        Transaction failed, please check your inputs.
                                    </div>
                                
                            }
                        </Typography>
                    </Box>
                    </Fade>
                </Modal>
            </div>
        </AnimatedPage>
    )
}