import java.io.File
import com.github.gradle.node.npm.task.NpmTask

plugins {
	java
	id("org.springframework.boot") version "3.5.7"
	id("io.spring.dependency-management") version "1.1.7"
	id("com.github.node-gradle.node") version "5.0.0"
}

group = "pl.iimo"
version = "0.0.1-SNAPSHOT"
description = "medical guidelines app for iimo"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(21)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-validation")
	implementation("org.springframework.boot:spring-boot-starter-web")
	runtimeOnly("org.postgresql:postgresql")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.withType<Test> {
	useJUnitPlatform()
}

node {
    download.set(false)
    workDir.set(file("${project.projectDir}/src/main/ts/med-guidelines"))
    npmWorkDir.set(file("${project.projectDir}/src/main/ts/med-guidelines"))
    nodeProjectDir.set(file("${project.projectDir}/src/main/ts/med-guidelines"))
}

tasks.register<NpmTask>("appNpmInstall") {
    description = "read package.json and install all dependencies"
    workingDir.set(file("${project.projectDir}/src/main/ts/med-guidelines"))
    args.set(listOf("install", "--loglevel=info")) 
}

tasks.register<NpmTask>("appNpmBuild") {
    description = "Builds application for your frontend"
    workingDir.set(file("${project.projectDir}/src/main/ts/med-guidelines"))
    args.set(listOf("run", "buildSkipErrors")) //TODO: After fixing build errors should be executed run 'build' instead of 'buildSkipErrors'
}

tasks.register<Copy>("copyToFrontend") {
    description = "Copies frontend build files"
    from("$projectDir/src/main/ts/med-guidelines/dist/")
    into("$projectDir/src/main/resources/static")
}

tasks.named("appNpmBuild") {
    dependsOn("appNpmInstall")
    finalizedBy("copyToFrontend")
}

tasks.named("compileJava") {
    dependsOn("copyToFrontend")
}

tasks.named("processResources") {
    dependsOn("copyToFrontend")
}