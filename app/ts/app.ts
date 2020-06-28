import { NegociacaoController } from './controllers/NegociacaoController';
import { NegociacaoService } from './services/NegociacaoService';

const negociacaoService = new NegociacaoService();

const controller = new NegociacaoController(negociacaoService);

$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importaDados.bind(controller));