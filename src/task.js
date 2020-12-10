function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

function Supply(name, qty) {
    this.name = name;
    this.qty = qty;
}

function Task(name, min, max, effort, supplies) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.effort = effort;
    this.supplies = supplies;
}

Task.prototype.execute = async function (input) {
    var {depot, crew} = input;

    // If there is a previous built part, not build a new one
    if(depot[this.name] && depot[this.name]>0)
        return {depot, crew};

    if(crew >= this.min)
    {
        this.supplies.forEach(supply => {
            if(depot[supply.name] && depot[supply.name] > supply.qty)
                depot[supply.name] -= supply.qty;
            else
                console.log(`Out of supply - ${supply.name}`);
        });
        console.log(`Executing ${this.name}`)

        // effort
        await sleep(2000);
        if(!depot[this.name])
            depot[this.name] = 0;

        depot[this.name]+=1;
    } else {
        console.log(`Not enough engineers - ${this.name}`);
    }

    return {depot, crew};
};

export { Task, Supply };