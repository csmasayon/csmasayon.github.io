import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import githubLogo from "./assets/github.svg";
import linkedinLogo from "./assets/linkedin.svg";

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Portfolio Under Construction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-justify">
              <p >
                Hello there! This is Christian Ace Masayon.
              </p>
              <p className="mt-5">
                My portfolio is still under construction. Please come back
                again soon!
              </p>
              <p className="mt-5">
                While you're waiting, links to my GitHub and LinkedIn are available below:
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div>
              <p className="flex">
                <a
                  href="https://github.com/csmasayon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub logo" />
                </a>
                <a
                  href="https://www.linkedin.com/in/christian-ace-masayon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3"
                >
                  <img src={linkedinLogo} alt="LinkedIn logo" />
                </a>
              </p>
              <p className="mt-5">Built using Vite, React, and TypeScript.</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default App;
