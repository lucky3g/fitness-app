// Storage manager for data persistence
const StorageManager = {
    // Initialize app data
    initializeApp: function() {
        if (!localStorage.getItem('appInitialized')) {
            localStorage.setItem('exercises', JSON.stringify(exercisesData));
            localStorage.setItem('dailyPlans', JSON.stringify(dailyPlansData));
            localStorage.setItem('completedDays', JSON.stringify([]));
            localStorage.setItem('userProgress', JSON.stringify([]));
            localStorage.setItem('measurements', JSON.stringify([]));
            localStorage.setItem('appInitialized', 'true');
        }
    },
    
    // Get exercises from localStorage
    getExercises: function() {
        return JSON.parse(localStorage.getItem('exercises')) || exercisesData;
    },
    
    // Get daily plans from localStorage
    getDailyPlans: function() {
        return JSON.parse(localStorage.getItem('dailyPlans')) || dailyPlansData;
    },
    
    // Get completed days from localStorage
    getCompletedDays: function() {
        return JSON.parse(localStorage.getItem('completedDays')) || [];
    },
    
    // Mark a day as completed
    markDayAsCompleted: function(day) {
        const completedDays = this.getCompletedDays();
        
        // Add this day if not already in the list
        if (!completedDays.includes(day)) {
            completedDays.push(day);
            localStorage.setItem('completedDays', JSON.stringify(completedDays));
            
            // Add progress entry
            this.addUserProgressEntry(day);
        }
    },
    
    // Add a user progress entry
    addUserProgressEntry: function(day) {
        const userProgress = this.getUserProgress();
        const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
        
        userProgress.push({
            date: date,
            dayCompleted: day
        });
        
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
    },
    
    // Get user progress from localStorage
    getUserProgress: function() {
        return JSON.parse(localStorage.getItem('userProgress')) || [];
    },
    
    // Save a measurement entry
    saveMeasurement: function(measurement) {
        const measurements = JSON.parse(localStorage.getItem('measurements')) || [];
        measurements.push(measurement);
        localStorage.setItem('measurements', JSON.stringify(measurements));
    },
    
    // Get the latest measurement
    getLatestMeasurement: function() {
        const measurements = JSON.parse(localStorage.getItem('measurements')) || [];
        if (measurements.length > 0) {
            // Sort by date and return the most recent
            measurements.sort((a, b) => new Date(b.date) - new Date(a.date));
            return measurements[0];
        }
        return null;
    },
    
    // Get the first measurement
    getFirstMeasurement: function() {
        const measurements = JSON.parse(localStorage.getItem('measurements')) || [];
        if (measurements.length > 0) {
            // Sort by date and return the oldest
            measurements.sort((a, b) => new Date(a.date) - new Date(b.date));
            return measurements[0];
        }
        return null;
    },
    
    // Reset all app data (for testing or troubleshooting)
    resetAppData: function() {
        localStorage.removeItem('appInitialized');
        localStorage.removeItem('exercises');
        localStorage.removeItem('dailyPlans');
        localStorage.removeItem('completedDays');
        localStorage.removeItem('userProgress');
        localStorage.removeItem('measurements');
        this.initializeApp();
    }
};
