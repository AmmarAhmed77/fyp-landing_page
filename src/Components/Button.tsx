import Image from 'next/image'
type ButtonProps = {
    type : 'button' | 'submit';
    icon?: string ;
    title: string ;
    variant: 'btn_dark_green' ;
}
const Button = ({type ,title , icon , variant} :ButtonProps) => {
  return (
      <button type="button" className={`flexCenter gap-3 rounded-full border bold-16 ${variant}`} >
        {icon && <Image src={icon} width={24} height={24} />}
        <label htmlFor="">{title}</label>
      </button>
  )
}

export default Button
