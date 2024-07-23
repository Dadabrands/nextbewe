const Footer = () => {
  return (
    <div className="flex gap-5 px-9 py-4 mt-4 w-full bg-blue-950 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col my-auto">
        <div className="flex gap-2">
          <div className="text-2xl tracking-wide leading-8 text-white">
            Social Media
          </div>
          <div className="text-2xl tracking-wide leading-8 text-white">:</div>
          <div className="flex gap-5 justify-between self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a50e1d40e0996aa2de7a45d58cf887172a8a2dc48a3d1b2748599886084da4a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7387bac94559d397d112465ae0b4427b17e4497c680a9bcb2011f9846b5387c?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-8 aspect-square"
            />
          </div>
        </div>
        <div className="mt-8 text-2xl tracking-wide leading-9 text-white">
          ISMS policy
        </div>
      </div>
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <div className="mt-96 text-2xl tracking-wide leading-8 text-center text-white max-md:mt-10 max-md:max-w-full">
              <span className="">Copyright </span>
              <span className="text-white">©</span>
              <span className=""> NextBẹwẹ | Designed by NextBẹwẹ Team </span>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-start py-20 min-h-[415px] max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb7c72b2e06af9f5676151d643265ef64bcc68821183b793408de9a14cd8748?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                className="object-cover absolute inset-0 size-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                className="max-w-full aspect-[2.86] w-[620px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
