import {fromEvent} from 'rxjs';
import { pipe } from 'rxjs';
import { map } from 'rxjs';
const source$ = fromEvent(document,'click');



source$.pipe(
    map(
        pointerEvent=>{
    return ({
        x:pointerEvent.x,
        y:pointerEvent.y
    });}),
    map(point =>{
        return ({
            x:- point.x,
            y: point.y
        })
})).subscribe({
    next:(data) =>{
        console.log(data);
    }
    // ,
    // error:(error)=>{
    //     console.log(error);
    // },
    // complete:()=>{
    //     console.log('complete');
    // }
})
