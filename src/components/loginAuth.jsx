import Image from "next/image";

export default function LoginAuth({ provider, onClick, imgSrc, altText }) {
    return(
      <div>
        <button className="login-button" onClick={onClick}>
          <Image src={imgSrc} alt={altText} width={20} height={20} />
          Log in with {provider}
          </button>

          <style jsx>{`
          div {
            margin-bottom: 10px;
          }

          button {
            color: white;
            padding: 15px;
            margin-top: 20px;
            cursor: pointer;
          }
        `}</style>
      </div>
      
    );
  }

