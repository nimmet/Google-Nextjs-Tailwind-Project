import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";


const signin = ({providers}) => {
  return (
    <>
        <Header />
        <div className="mt-40">
        {Object.values(providers).map(provider =>(
            <div key={provider.name} className="flex flex-col items-center">
                <img
                className="w-52 object-cover "
                 src=" https://th.bing.com/th/id/OIP.ybCkn_y7YH0Ri_oAnCW3NAHaE8?w=266&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" alt='google loogoo' />
            <p
            
            className="text-sm italic my-10 text-center"
            >This website is created for learning purposes.</p>
            <button 
            className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
            onClick={()=>signIn(provider.id,{callbackUrl:"/"})}>Sign in with {provider.name}</button>
            </div>
        )
        )
        }
        </div>
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: { providers },
    };
  }

export default signin

