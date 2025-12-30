#!/bin/bash
set -e

# Log File Analyzer Script


# Check if argument is provided
if [ $LOG_FILE -eq 0 ]; then
    echo "❌ Error: No log file provided."
    echo "Usage: $0 <log-file-path>"
    exit 1
fi

LOG_FILE="C:\Users\madhu\fullstack-workshop\Submissions\01-linux\sample-log.txt"

# Check if file exists
if [ ! -f "$LOG_FILE" ]; then
    echo "❌ Error: File '$LOG_FILE' does not exist."
    exit 1
fi

# Count total lines
TOTAL_LINES=$(wc -l < "$LOG_FILE")

# Count log levels (case-insensitive)
INFO_COUNT=$(grep -i -c "info" "$LOG_FILE")
WARNING_COUNT=$(grep -i -c "warning" "$LOG_FILE")
ERROR_COUNT=$(grep -i -c "error" "$LOG_FILE")

# Extract unique IP addresses
IPS=$(grep -oE '([0-9]{1,3}\.){3}[0-9]{1,3}' "$LOG_FILE" | sort | uniq)

# Output report
echo "========== LOG ANALYSIS REPORT =========="
echo "File: $(realpath "$LOG_FILE")"
echo "Total Lines: $TOTAL_LINES"
echo "-----------------------------------------"
echo "INFO:    $INFO_COUNT"
echo "WARNING: $WARNING_COUNT"
echo "ERROR:   $ERROR_COUNT"
echo "-----------------------------------------"
echo "Unique IP Addresses Found:"

if [ -z "$IPS" ]; then
    echo "  - None"
else
    for ip in $IPS; do
        echo "  - $ip"
    done
fi

echo "========================================="
