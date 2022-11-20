# YglesES Framework

## Introduction
This framework was thinking for embedded Man Machine Interface (MMI). It is more than a group of  libraries than a real framework. You have to respect the [**Software Development Plan (SDP)**](#how-to-contribute) if you want to contribute.

For the moment, I am the only maintainers so reviews can take many time but as you can read into the SDP there is a way to work with your module before its merge into stable branch.

## Software Development Plan
### Summary
1. <a href='#introduction'>Introduction</a>

2. <a href='#terminology'>Terminology</a>

3. <a href='#reference-document'>Reference documents</a>

4. <a href='#project-organization'>Project organization</a>

5. <a href='#development-methods'>Development methods</a>

<details id='introduction'><summary><h3>1. Introduction</h3></summary> 
<p>
This part of the documentation explains the rules that the developer have to respect if he wants to contribute to the project.

In this SDP you will not find planning or team step plan because it is not possible in this repository but you will find reference documents (for coding rules for example), git workflow, tools, process etc...
</p></details>

<details id='terminology'><summary><h3>2. Terminology</h3></summary>
<table>
  <tr><th>Abbrevation</th><th>Definition</th></tr>
  <tr><td>e2e</td><td>End to End</td></tr>
  <tr><td>MMI</td><td>Man Machine Interface</td></tr>
  <tr><td>PR </td><td>Pull-Request</td></tr>
  <tr><td>SDD</td><td>Software Design Description</td></tr>
  <tr><td>SDP</td><td>Software Development Plan</td></tr>
  <tr><td>SRS</td><td>Software Requirement Specification</td></tr>
  <tr><td>STD</td><td>Software Test Document</td></tr>
  <tr><td>TDD</td><td>Test Driven Development</td></tr>
</table>
</details>

<details id='refecence-document'><summary><h3>3. Reference documents</h3></summary>
<p>
<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Date</th>
    <th>Link</th>
  </tr>
  <tr>
    <td>20221102-YglesES_EslintCodingRules.pdf</td>
    <td>Coding rules which can be checked by eslint</td>
    <td>2022-22-03</td>
    <td><a href='./docs/01-SDP/20221102-YglesES_CodingRules.pdf'>YglesES_EslintCodingRules</a></td>
  </tr>
</table>
</p></details>

<details id='project-organization'><summary><h3>4. Project organization</h3></summary>
<p>
This project is an open source project, everybody can contribute if he respects this SDP.

It has only 1 maintainers [@YglesEyes](https://github.com/YglesEyes), this list can changed, in this case this document will be updated. 

Only 1 maintainers must force to adapt some process, all documents written by [@YglesEyes](https://github.com/YglesEyes) which needs approvement will be automatically approved but if you see some errors you can modify it and make a Pull-Request (PR).

In the future if more maintainers joined the team all documents will be reviewed and approved by another maintainers.
</p></details>

<details id='development-methods'><summary><h3>5. Development methods</h3></summary>
<p>
  The method is a mix between V-Model and Agile method. Each package required a SRS, a SDD and a STD (for unitary test and e2e test if the package is a front component).

  You can specify a part of the package, doing your development and update the specification for the next part of the package development.
  Doing like this allow developer to use the Test Driven Development (TDD) process, developer can write a part of specification, write the associated test, doing his development and go on. 

  With this process, developer can search to have a functional and safe code and at the end of the development he can make the code proper, be keep in mind the no PR would be accepted if coding rules and other process/rules are not respected.

  To allow more flexibility during the development repository is based on stable trunk workflow. Each packages has its own development branch named "devel/{packageName}".

  Developer:
  - Has to fork the repository
  - Has to create a feature/bugfix branch from the package branch
  - Has to doing his specification, tests, development
  - Can publish beta version of his packages
  - Has to rebase the feature/bugfix branch
  - Has to create a PR to the development branch
  - Has to take about PR comments
  - Has to wait for PR approbation
  - Can defer the PR merge by asking it into PR comment otherwise it will be merge directly
</p></details>