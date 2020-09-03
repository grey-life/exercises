const greetings = () => {
    const hour = new Date().getHours();
    if (5 <= hour && hour < 12) {
        return 'Good Morning!'
    }
    if (12 <= hour && hour < 16){
        return 'Good Afternoon!'
    }
    if (16 <= hour && hour < 20){
        return 'Good Evening!'
    }    
    return 'Good Night!';
}
console.log(greetings());