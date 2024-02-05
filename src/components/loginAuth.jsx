export default function LoginAuth({ provider, onClick, imgSrc, altText }) {
    return(
      <div>
        <button className="login-button" onClick={onClick}>
          <img src={imgSrc} alt={altText} />
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

