
const light_count = 6;
let current_light = -1; /* ["b1","b2","b3","b4","b5","b6"]*/
let direction = "RIGHT";

let setintervel = null;


updateLight = () => {

    if(direction === "RIGHT"){
        current_light++;
        $('.b').css('background','transparent');
        $('.b').eq(current_light).css('background', 'red');
        $('.b').eq(current_light-1).css('background', 'pink');


        if(current_light===light_count-1){
            direction = "LEFT";

        }

    }else {
        current_light--;
        $('.b').css('background','transparent');
        $('.b').eq(current_light).css('background', 'red');
        $('.b').eq(current_light+1).css('background', 'pink');

        if (current_light===0){
            direction="RIGHT";
        }
    }
}



$('#start').on('click',()=>{
    setintervel = setInterval(updateLight,100);
    console.log(setintervel)
});


$('#stop').on('click',()=>{
    clearTimeout(setintervel)
});