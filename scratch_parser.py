text = """
-3.33
+3.74
+1.61
+1.94
-2.84
+4.21
+3.73
+2.46
-3.30
+3.80
+4.89
-3.36
-3.33
+3.74
+3.90
+3.39
+1.83
-3.34
-3.54
-3.26
-3.37
-3.19
+1.73
+2.02
+1.54
-3.02
-3.45
+3.99
-3.50
-3.54
-3.33
-3.21
+1.40
+1.16
+3.24
+3.74
"""

import sys

lines = text.strip().split('\n')
output = []

for line in lines:
    line = line.strip()
    if not line:
        continue
    val = float(line)
    output.append(f"{{ date: 'Jul 30', pnl: {val} }}")

print(", ".join(output))
