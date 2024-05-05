
total_time = 0
count = 0
print("Enter time values (e.g., 'wasm: 0.0048828125 ms'), one per line. Enter an empty line to finish:")
while True:
    line = input().strip()
    if not line:
        break
    parts = line.split(': ')
    time_str = parts[1].strip().split(' ')[0]
    total_time += float(time_str)
    count += 1

# Calculate the average time
average_time = total_time / count

# Print the average time
print("Average time:", average_time, "ms")


