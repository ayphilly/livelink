import { Routes, Route } from "react-router-dom";
import { Error404 } from "./pages/error";
import { allRoutes } from "./routes/routes";

function App() {
  return (
    <div className="w-full bg-main-200 flex items-center ">
        <Routes>
            {
                allRoutes.map( (item, index)=>(
                    <Route
                        key={item.path}
                        path={item.path}
                        element={<item.component />}
                    />
                  ))
            }
            <Route path="*" element={<Error404 />} />
        </Routes>
    </div>
  );
}
export default App;
