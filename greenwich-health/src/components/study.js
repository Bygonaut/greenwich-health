import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from 'react-tooltip'


const studySections = {
    0: {
        title:'Informed Consent For Clinical Research',
        content:'Yes, you are being informed about this this study'
    },
    1: {
        title:'Why is this study being done?',
        content:'Integer enim neque volutpat ac tincidunt. <span class="font-bold text-blue-600" data-tip="Adrenal glands (glands on top of the kidneys)\n may not make enough hormone, causing tiredness; weight loss; muscle weakness; feeling faint; joint, muscle, and abdominal aches; nausea, vomiting, loose or watery stools; fever; salt craving; and sometimes darkening of the skin like a suntan">Adrenal insufficiency</span> cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit <span class="font-bold text-blue-600" data-tip="Decreased number of red blood cells, which causes tiredness and shortness of breath">anemia</span> risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat <span class="font-bold text-blue-600" data-tip="Pain in the joints">arthralgia</span> volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec <span class="font-bold text-blue-600" data-tip="Changes in some blood tests for liver function (e.g., increase in liver enzymes in your blood, which may be a sign of liver damage)">elevated AST</span> sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.Integer enim neque volutpat ac tincidunt. Arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu. Amet venenatis urna cursus eget nunc scelerisque viverra. Id nibh tortor id aliquet lectus proin nibh. Aliquam etiam erat velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu. Lorem mollis aliquam ut porttitor leo a diam. Ullamcorper sit amet risus nullam eget. At consectetur lorem donec massa sapien. Adipiscing diam donec adipiscing tristique risus. Morbi tincidunt ornare massa eget egestas purus viverra. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim blandit volutpat maecenas volutpat.'
    }
}

export default function Study(props) {
    return (
        <div className="flex-1 p-10 overflow-auto justify-center">
            <p className="text-4xl">{studySections[props.sectionId].title}</p>
            <div dangerouslySetInnerHTML={{ __html:studySections[props.sectionId].content}}></div>
            <ReactTooltip className="max-w-xl"/>
        </div>
    )
}

Study.defaultProps = {
    sectionId: 1
}