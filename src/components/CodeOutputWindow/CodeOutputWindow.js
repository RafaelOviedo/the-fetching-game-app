import React from "react";

function OutputWindow ({ outputDetails }) {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };

  return (
    <div style={{ width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '1px solid blue'}}>
      <h1>
        Output
      </h1>
      <div style={ { width: '90%', height: '80%', border: '1px solid red' } }>
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </div>
  );
};

export default OutputWindow;
