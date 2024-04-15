import Content from './Content';
import Footer from './Footer';
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;