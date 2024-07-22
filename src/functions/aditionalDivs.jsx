export function generateAdditionalDivs(num){
    const divs = [];
    for (let i = 0; i < num; i++) {
      divs.push(<div key={i} className="skillContainer shadow"></div>);
    }
    return divs;
  }