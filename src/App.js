import React from "react";
import SkyLight from 'react-skylight';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

  return (
    <div className="text-center bg-primary">
      <div className="flex flex-col text-4xl justify-center items-center min-h-screen">
        <div className="w-max rounded-xl border-2 border-solid border-purple-800 bg-purple-800 shadow-xl hover:border-yellow-500 hover:bg-yellow-500 hover:animate-pulse duration-1000">
          <h1 className="text-white p-10 mb-5 pb-5">Andrija Lerner - Hello World</h1>
          <p className="text-2xl mb-4 text-white">Welcome! :D</p>
        </div>
        <div className="w-max h-max rounded-xl border-2 border-solid border-purple-800 bg-purple-800 shadow-xl m-6 hover:border-yellow-500 hover:bg-yellow-500 hover:animate-pulse duration-1000">
          <button className="text-white text-xl m-6" onClick={() => this.simpleDialog.show()}>About me</button>
        </div>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Andrija Lerner">
          <p className="text-lg">19 years old software developer ready to learn and expand his knowledge and opportunities in computer science.</p>
          <div className="text-left text-lg">
            <p>Skills:</p>
            <p>- Frontend development (React.js, Next.js, HTML, CSS, JS, ASP.NET (C#), Tailwind.css)</p>
            <p>- Backend development (MySQL)</p>
            <p>- Video game development (C++, Unreal Engine)</p>
            <p>- Video editing (Sony Vegas 14, Adobe Premiere pro)</p>
            <p>Education:</p>
            <p>- Elektrotehnička škola Split - Tehničar za računalstvo (2016-2020)</p>
            <p>- Fakultet elektrotehnike, strojarstva i brodogradnje (2020-?)</p>
            <p>Mail: lerner.andi@gmail.com , alerne00@fesb.hr</p>
            <a className="text-yellow-500" href="https://www.instagram.com/lepfner_/" target="_blank" rel="noopener noreferrer">My Instagram</a>
          </div>
        </SkyLight>
      </div>
    </div>
  );
}
}

export default App;
