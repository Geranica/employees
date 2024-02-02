import './app-info.css';

const AppInfo = ({data}) => {

   let totalAmount = data.length;
   let increaseAmount = data.filter (item => item.increase).length;
   
   return (
      <div className="app-info">
         <h1>Учет сотрудников в комапнии X</h1>
         <h2>Общее число сотрудников: {totalAmount}</h2>
         <h2>Премию получат: {increaseAmount}</h2>
      </div>
   )
};

export default AppInfo;