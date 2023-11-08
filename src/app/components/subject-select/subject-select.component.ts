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

        console.log(this.block);
        console.log(this.tempBlockList);
    }

    createTempBlocks() {
        this.block?.subjects.forEach( subject => {
            let tempBlock: Block = {
                name: subject.name,
                exam: this.block?.exam,
                block_type: this.block?.block_type,
                subjects: [subject],
                ects: this.block?.ects,
                hours: this.block?.hours
            }
            this.tempBlockList?.push(tempBlock);
        });
    }
}
