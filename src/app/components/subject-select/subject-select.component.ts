import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Block} from "../../model/block";

@Component({
  selector: 'app-subject-select',
  templateUrl: './subject-select.component.html',
  styleUrls: ['./subject-select.component.css']
})

export class SubjectSelectComponent implements OnInit {
    block!: Block;
    tempBlockList: Block[] = [];

    constructor(private subjectService: SubjectService) {
        this.block = this.subjectService.getSelectedBlock();
    }

    ngOnInit() {
        this.createTempBlocks();
    }

    createTempBlocks() {
        this.block?.subjects.forEach( subject => {
            let tempBlock: Block = {
                name: subject.name,
                exam: this.block?.exam,
                block_type: this.block?.block_type,
                subjects: [subject],
                ects: this.block?.ects,
                ectsString: this.block?.ectsString,
                hours: this.block?.hours,
                semester: this.block?.semester
            }
            this.tempBlockList?.push(tempBlock);
        });
        this.tempBlockList?.sort((a, b) => a.name.localeCompare(b.name));
    }
}
