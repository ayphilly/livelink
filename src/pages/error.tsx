import { TitleBody } from "../components/common";

export const Error404 =  ()=> {

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <TitleBody   
        title="Oops :("
        body=" The page you are currently looking for 
        isn’t available or missing :(, maybe it was  removed or renamed,
        we advise you go back to the homepage."
      />
    </div>
  );
}