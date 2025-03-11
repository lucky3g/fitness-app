// Exercise data
const exercisesData = [
    {
        id: 1,
        name: "Crunches",
        description: "Lie on your back with knees bent. Place hands behind head. Lift shoulders off the mat while engaging core.",
        imageUrl: "images/crunches.jpg",
        duration: 30,
        focusArea: "Upper Abs"
    },
    {
        id: 2,
        name: "Bicycle Crunch",
        description: "Lie on your back with hands behind head. Bring opposite elbow to knee while extending other leg.",
        imageUrl: "images/bicycle.jpg",
        duration: 30,
        focusArea: "Obliques"
    },
    {
        id: 3,
        name: "Russian Twist",
        description: "Sit with knees bent, feet off the floor. Twist torso from side to side.",
        imageUrl: "images/russian_twist.jpg",
        duration: 30,
        focusArea: "Obliques"
    },
    {
        id: 4,
        name: "Plank",
        description: "Hold a push-up position with weight on forearms. Keep body straight from head to heels.",
        imageUrl: "images/plank.jpg",
        duration: 30,
        focusArea: "Core"
    },
    {
        id: 5,
        name: "Mountain Climbers",
        description: "Start in push-up position. Bring knees toward chest alternating legs in a climbing motion.",
        imageUrl: "images/mountain_climbers.jpg",
        duration: 30,
        focusArea: "Full Core"
    },
    {
        id: 6,
        name: "Leg Raises",
        description: "Lie on back with legs straight. Lift legs up to 90 degrees and lower slowly without touching floor.",
        imageUrl: "images/leg_raises.jpg",
        duration: 30,
        focusArea: "Lower Abs"
    },
    {
        id: 7,
        name: "Burpees",
        description: "Begin standing, drop to a squat, kick feet back to plank, return to squat, jump up.",
        imageUrl: "images/burpees.jpg",
        duration: 30,
        focusArea: "Full Body"
    },
    {
        id: 8,
        name: "Side Plank",
        description: "Lie on side with weight on forearm. Lift hips creating straight line from head to feet.",
        imageUrl: "images/side_plank.jpg",
        duration: 30,
        focusArea: "Obliques"
    },
    {
        id: 9,
        name: "Reverse Crunch",
        description: "Lie on back, hands at sides. Bring knees to chest while lifting hips off the floor.",
        imageUrl: "images/reverse_crunch.jpg",
        duration: 30,
        focusArea: "Lower Abs"
    },
    {
        id: 10,
        name: "Jumping Jacks",
        description: "Stand with feet together, jump while spreading legs and bringing arms above head.",
        imageUrl: "images/jumping_jacks.jpg",
        duration: 30,
        focusArea: "Cardio"
    },
    {
        id: 11,
        name: "High Knees",
        description: "Run in place lifting knees to waist level.",
        imageUrl: "images/high_knees.jpg",
        duration: 30,
        focusArea: "Cardio"
    },
    {
        id: 12,
        name: "Flutter Kicks",
        description: "Lie on back with legs straight and slightly lifted. Alternate kicking legs up and down.",
        imageUrl: "images/flutter_kicks.jpg",
        duration: 30,
        focusArea: "Lower Abs"
    },
    {
        id: 13,
        name: "Hollow Hold",
        description: "Lie on back, arms extended overhead. Lift shoulders and legs off floor creating a boat shape.",
        imageUrl: "images/hollow_hold.jpg",
        duration: 30,
        focusArea: "Full Core"
    },
    {
        id: 14,
        name: "Scissors",
        description: "Lie on back with legs extended and lifted. Cross legs over each other in scissor motion.",
        imageUrl: "images/scissors.jpg",
        duration: 30,
        focusArea: "Lower Abs"
    },
    {
        id: 15,
        name: "Plank to Push-up",
        description: "Start in forearm plank, push up to hand plank one arm at a time, then return to forearm.",
        imageUrl: "images/plank_pushup.jpg",
        duration: 30,
        focusArea: "Core and Arms"
    }
];

// Daily exercise plans for 30 days
const dailyPlansData = [
    {
        day: 1,
        exercises: [1, 4, 10],
        focusDescription: "Introduction to core exercises"
    },
    {
        day: 2,
        exercises: [1, 2, 4],
        focusDescription: "Building core foundation"
    },
    {
        day: 3,
        exercises: [10, 11, 1],
        focusDescription: "Cardio for fat burning"
    },
    {
        day: 4,
        exercises: [6, 9, 12],
        focusDescription: "Lower abs targeting"
    },
    {
        day: 5,
        exercises: [2, 3, 8],
        focusDescription: "Oblique strengthening"
    },
    {
        day: 6,
        exercises: [1, 4, 13],
        focusDescription: "Full core challenge"
    },
    {
        day: 7,
        exercises: [10, 4],
        focusDescription: "Active recovery"
    },
    {
        day: 8,
        exercises: [5, 7, 2],
        focusDescription: "Increasing workout intensity"
    },
    {
        day: 9,
        exercises: [3, 6, 10],
        focusDescription: "Mixed core workout"
    },
    {
        day: 10,
        exercises: [1, 5, 9],
        focusDescription: "Full abdominal circuit"
    },
    {
        day: 11,
        exercises: [7, 11, 2],
        focusDescription: "Cardio and obliques"
    },
    {
        day: 12,
        exercises: [6, 12, 14],
        focusDescription: "Lower abs focus"
    },
    {
        day: 13,
        exercises: [3, 8, 2],
        focusDescription: "Obliques day"
    },
    {
        day: 14,
        exercises: [10, 4],
        focusDescription: "Active recovery"
    },
    {
        day: 15,
        exercises: [1, 4, 9, 13],
        focusDescription: "Core strength boost"
    },
    {
        day: 16,
        exercises: [5, 7, 11],
        focusDescription: "High intensity interval training"
    },
    {
        day: 17,
        exercises: [2, 3, 8, 14],
        focusDescription: "Advanced oblique workout"
    },
    {
        day: 18,
        exercises: [6, 9, 12, 14],
        focusDescription: "Lower abs sculpting"
    },
    {
        day: 19,
        exercises: [1, 4, 13, 15],
        focusDescription: "Core and arm strength"
    },
    {
        day: 20,
        exercises: [5, 7, 10],
        focusDescription: "Fat burning circuit"
    },
    {
        day: 21,
        exercises: [10, 4],
        focusDescription: "Active recovery"
    },
    {
        day: 22,
        exercises: [2, 3, 5, 8],
        focusDescription: "Core power workout"
    },
    {
        day: 23,
        exercises: [1, 6, 9, 12],
        focusDescription: "Full abs circuit"
    },
    {
        day: 24,
        exercises: [7, 10, 11, 15],
        focusDescription: "Endurance and strength"
    },
    {
        day: 25,
        exercises: [2, 3, 8, 14],
        focusDescription: "Oblique definition"
    },
    {
        day: 26,
        exercises: [4, 5, 13, 15],
        focusDescription: "Plank challenge day"
    },
    {
        day: 27,
        exercises: [6, 9, 12, 14],
        focusDescription: "Lower abs intensity"
    },
    {
        day: 28,
        exercises: [10, 4],
        focusDescription: "Active recovery"
    },
    {
        day: 29,
        exercises: [1, 2, 3, 5, 7],
        focusDescription: "Full core challenge"
    },
    {
        day: 30,
        exercises: [4, 6, 9, 12, 13],
        focusDescription: "Final day challenge"
    }
];
