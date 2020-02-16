

function sumOfCapsule() {

    let firstCapsule = document.getElementById('firsCapsule');
    let first = +firstCapsule.value;
    let secondCapsule = document.getElementById('secondCapsule');
    let second = +secondCapsule.value;
    let thirdCapsule = document.getElementById('thirdCapsule');
    let third = +thirdCapsule.value;
    let fourthCapsule = document.getElementById('fourthCapsule');
    let fourth = +fourthCapsule.value;
    let fifthCapsule = document.getElementById('fifthCapsule');
    let fifth = +fifthCapsule.value;
    let sumOfCapsule = document.getElementById('sumOfCapsule');

    let firstManeuver = document.getElementById('firstManeuver');
    let maneuverOne = +firstManeuver.value;
    let secondManeuver = document.getElementById('secondManeuver');
    let maneuverTwo = +secondManeuver.value;
    let thirdManeuver = document.getElementById('thirdManeuver');
    let maneuverThree = +thirdManeuver.value;
    let fourthManeuver = document.getElementById('fourthManeuver');
    let maneuverFour = +fourthManeuver.value;
    let fifthManeuver = document.getElementById('fifthManeuver');
    let maneuverFive = +fifthManeuver.value;
    let sumOfManeuver = document.getElementById('sumOfManeuver');

    let maneuverSum = maneuverOne + maneuverTwo + maneuverThree + maneuverFour + maneuverFive;
    sumOfManeuver.value = maneuverSum;

    let sumCapsule = first + second + third + fourth + fifth;
    sumOfCapsule.value = sumCapsule;

    function sort(arrr) {
        arrr.sort((a, b) => a.power <= b.power ? 1 : -1);

    }
    let cells = [
        { power: first },
        { power: second },
        { power: third },
        { power: fourth },
        { power: fifth },
    ]

    sort(cells);

    let corections = [
        { maneuver: maneuverOne },
        { maneuver: maneuverTwo },
        { maneuver: maneuverThree },
        { maneuver: maneuverFour },
        { maneuver: maneuverFive }
    ]
    console.log(cells);
    console.log(corections);



    // testObject= corections.every(function(element, index, array){
    //     if( element.maneuver == cells.power ){
    //         console.log(element.maneuver);
    //         return false;
    //     }
    // });

    




    // for (i = 0; i <= 4; i++) {
    //     if (corections.maneuver = cells.power) {
    //         console.log(corections.maneuver);

    //         // testObject[i] = cells[i].power + 'na pervom dvigatele uskorenie=' + corections[i].maneuver;
    //     }
    //     else {

    //         alert('kurwa!');
    //     }
    // }
    // console.log(testObject);
}
// если мощность маневра = емкости капсулы то возьми капсулу и используй ее в первом двигателе
//  если мощность маневра меньше емкости капсулы в половину то возьми эту капсулу и используй ее во втором двигателе
//если мощность маневра больше емкости капсул, то выбери капсулы которые (а1 + а2/2)  = мощности маневра 
//если мощность маневра больше емкости капсул, то выбери капсулы  которые (а1 + а2/2)  = или меньше мощности маневра 
