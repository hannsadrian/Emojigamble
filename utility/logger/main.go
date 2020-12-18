package logger

import (
	"log"
	"time"
)

type LogLevel string

const(
	GameLogLevel = "GameLogLevel"
	ConnectionLogLevel = "ConnectionLogLevel"
	BaseLogLevel = "BaseLogLevel"
	WarnLogLevel = "WarnLogLevel"
	ErrorLogLevel = "ErrorLogLevel"
	)

type EmojigambleLogger struct {
	ActiveLogLevels []LogLevel
	LogToDatabase bool
	MongoDBConnectionString string
}

func (logger *EmojigambleLogger) log(message string, level LogLevel) {
	for _, l := range logger.ActiveLogLevels {
		if l == level {
			log.Println(time.Now(), level, message)
		}
	}

	if logger.LogToDatabase {
		// TODO: save log into database
	}
}