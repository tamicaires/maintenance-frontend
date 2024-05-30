import { Card, Cards } from "../components/Cards";


const Dashboard = () => {
  return (
    <div >
      <div className='flex p-20'>
        <div className='p-2 '>
          <Card />
        </div>
        {/* <div className='p-6 w-1/2'>
          <Cards />
        </div> */}
      </div>

    </div>
  )
};

export default Dashboard;