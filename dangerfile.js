import {message, danger} from "danger"

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

message("Additions: \n - " + danger.github.pr.additions)

message("Artifects: \n - " + danger.github.api.actions.getArtifact())