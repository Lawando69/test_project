import "./ExerciseList.css";
import Image1 from "../../Assets/Images/deadlift_image.jpg";
import Image2 from "../../Assets/Images/largeWeight_image.jpg";
import Image3 from "../../Assets/Images/mediumWeight_image.jpg";
import Image4 from "../../Assets/Images/smallWeight_image.jpg";
import Image5 from "../../Assets/Images/treadmill_image.jpg";
// NOTE: Assets used are free to use according to the source website.
// Source Link: https://www.pexels.com/

export default function ExerciseList(){
    return(
        [
            {
                name: "DeadLift",
                image: Image1,
                description: "The deadlift is a compound strength-training exercise that targets multiple muscle groups, including the hamstrings, glutes, lower back, core, and grip. It involves lifting a loaded barbell from the ground to a standing position while maintaining a neutral spine and strong posture."
            },
            {
                name: "Heavy Weight Lift - Dumbells",
                image: Image2,
                description: "Heavy dumbbells are weighted fitness equipment used for strength training and muscle building. They provide a versatile way to perform exercises targeting various muscle groups, including the arms, shoulders, chest, back, and legs."
            },
            {
                name: "Kettlebells",
                image: Image3,
                description: "Kettlebells are compact, ball-shaped weights with a handle, used for strength training, endurance, and functional fitness. They allow for dynamic movements like swings, snatches, and Turkish get-ups, which engage multiple muscle groups and improve coordination, balance, and cardiovascular fitness."
            },
            {
                name: "Light Weight Lift - Dumbells",
                image: Image4,
                description: "Lightweight dumbbells are smaller, lower-weight dumbbells designed for endurance training, rehabilitation, and toning muscles. They are commonly used for high-repetition exercises, improving muscle definition, and enhancing mobility."
            },
            {
                name: "Treadmill",
                image: Image5,
                description: "A treadmill is a cardio fitness machine that allows users to walk, jog, or run indoors at adjustable speeds and inclines. It provides a convenient and controlled environment for cardiovascular workouts, improving endurance, heart health, and calorie burning."
            }
        ]
    )
}
