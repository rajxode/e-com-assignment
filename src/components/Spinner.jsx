// importing spinner from library
import Spinner from 'react-spinner-material';


// render loading  spinner 
export default function Loader() {

  return (
    // styling the spinner
      <div className='flex justify-center items-center w-full h-full '>
        <div>
          {/* show spinner */}
          <Spinner radius={80} color={"#2874f0"} stroke={4} visible={true} />
          {/* show message below the spinner */}
          <h4 className='text-center mt-1 font-semibold text-[#2874f0]'>Loading...</h4>
        </div>
      </div>
    )
}