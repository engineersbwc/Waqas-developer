package com.example.myvowe;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.RadioButton;
import android.widget.RadioGroup;

public class MainActivity extends AppCompatActivity {

    // ============ STEP 1: DECLARE UI ELEMENTS ============
    private EditText inputField;
    private TextView resultText;
    private RadioGroup operationGroup;
    private Button calculateButton;

    // ============ STEP 2: INITIALIZE APP ============
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Connect Java variables to XML elements
        inputField = findViewById(R.id.inputField);
        resultText = findViewById(R.id.resultText);
        operationGroup = findViewById(R.id.operationGroup);
        calculateButton = findViewById(R.id.calculateButton);

        // Set button click listener
        calculateButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                performOperation();
            }
        });
    }

    // ============ STEP 3: MAIN OPERATION HANDLER ============
    private void performOperation() {
        // Get input from user
        String input = inputField.getText().toString().trim();
        
        // Validate if input is empty
        if (input.isEmpty()) {
            resultText.setText("⚠️ Please enter input!");
            return;
        }

        // Get selected radio button
        int selectedId = operationGroup.getCheckedRadioButtonId();
        
        // Check if any operation is selected
        if (selectedId == -1) {
            resultText.setText("⚠️ Please select an operation!");
            return;
        }

        String result = "";

        // Call appropriate method based on selection
        if (selectedId == R.id.radioVowel) {
            result = checkVowel(input);
        }
        else if (selectedId == R.id.radioGrade) {
            result = calculateGrade(input);
        }
        else if (selectedId == R.id.radioEvenOdd) {
            result = checkEvenOdd(input);
        }
        else if (selectedId == R.id.radioPrintName) {
            result = printName(input);
        }
        else if (selectedId == R.id.radioTable) {
            result = printTable(input);
        }

        // Display result
        resultText.setText(result);
    }

    // ============================================
    // Q#1: CHECK IF CHARACTER IS VOWEL OR NOT
    // ============================================
    private String checkVowel(String input) {
        // Validate input length
        if (input.length() != 1) {
            return "❌ Please enter only one alphabet!";
        }
        
        // Convert to lowercase for comparison
        char ch = Character.toLowerCase(input.charAt(0));
        
        // Check if it's a valid letter
        if (!Character.isLetter(ch)) {
            return "❌ Please enter a valid alphabet!";
        }
        
        // Check if vowel
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            return "✅ '" + ch + "' is a VOWEL\n\n" +
                   "Vowels: a, e, i, o, u";
        } else {
            return "✅ '" + ch + "' is NOT a vowel\n\n" +
                   "It's a consonant!";
        }
    }

    // ============================================
    // Q#2: CALCULATE GRADE FROM MARKS
    // ============================================
    private String calculateGrade(String input) {
        try {
            // Convert string to integer
            int marks = Integer.parseInt(input);
            
            // Validate marks range
            if (marks < 0 || marks > 100) {
                return "❌ Please enter marks between 0-100!";
            }
            
            // Determine grade
            String grade;
            String remark;
            
            if (marks >= 90) {
                grade = "A";
                remark = "Excellent! 🌟";
            } else if (marks >= 80) {
                grade = "B";
                remark = "Very Good! 👍";
            } else if (marks >= 70) {
                grade = "C";
                remark = "Good! 😊";
            } else if (marks >= 60) {
                grade = "D";
                remark = "Satisfactory! 📚";
            } else {
                grade = "F";
                remark = "Need Improvement! 💪";
            }
            
            return "📊 GRADE REPORT\n" +
                   "═══════════════\n" +
                   "Marks: " + marks + "/100\n" +
                   "Grade: " + grade + "\n" +
                   "Remark: " + remark;
            
        } catch (NumberFormatException e) {
            return "❌ Please enter a valid number!";
        }
    }

    // ============================================
    // Q#3: CHECK IF NUMBER IS EVEN OR ODD
    // ============================================
    private String checkEvenOdd(String input) {
        try {
            // Convert string to integer
            int number = Integer.parseInt(input);
            
            // Check using modulus operator
            if (number % 2 == 0) {
                return "✅ " + number + " is EVEN\n\n" +
                       "🔢 Explanation:\n" +
                       number + " ÷ 2 = " + (number/2) + " (No remainder)";
            } else {
                return "✅ " + number + " is ODD\n\n" +
                       "🔢 Explanation:\n" +
                       number + " ÷ 2 = " + (number/2) + " (Remainder: 1)";
            }
            
        } catch (NumberFormatException e) {
            return "❌ Please enter a valid number!";
        }
    }

    // ============================================
    // Q#4: PRINT NAME 5 TIMES
    // ============================================
    private String printName(String name) {
        // Validate name
        if (name.isEmpty()) {
            return "❌ Please enter a name!";
        }
        
        // Use StringBuilder for efficient string building
        StringBuilder result = new StringBuilder();
        result.append("📝 PRINTING NAME 5 TIMES\n");
        result.append("═══════════════════════\n\n");
        
        // Loop to print name 5 times
        for (int i = 1; i <= 5; i++) {
            result.append(i).append(". ").append(name).append("\n");
        }
        
        result.append("\n✅ Name printed successfully!");
        
        return result.toString();
    }

    // ============================================
    // Q#5: PRINT MULTIPLICATION TABLE
    // ============================================
    private String printTable(String input) {
        try {
            // Convert string to integer
            int number = Integer.parseInt(input);
            
            // Use StringBuilder for efficient string building
            StringBuilder result = new StringBuilder();
            result.append("📊 MULTIPLICATION TABLE\n");
            result.append("═══════════════════════\n");
            result.append("Table of ").append(number).append(":\n\n");
            
            // Loop from 1 to 10
            for (int i = 1; i <= 10; i++) {
                int product = number * i;
                result.append(number).append(" × ")
                      .append(String.format("%2d", i))
                      .append(" = ")
                      .append(String.format("%3d", product))
                      .append("\n");
            }
            
            result.append("\n✅ Table generated successfully!");
            
            return result.toString();
            
        } catch (NumberFormatException e) {
            return "❌ Please enter a valid number!";
        }
    }
}