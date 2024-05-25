function App() {
  // React.useEffect(() => {}, []);

  return (
    <div className='card shadow-xl'>
      <img
        className='card__qr-code'
        width='288'
        height='288'
        src='images/image-qr-code.png'
        alt='QR code'
      />
      <h1 className='card__heading'>
        Improve your front-end skills by building projects
      </h1>
      <p className='card__description'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
